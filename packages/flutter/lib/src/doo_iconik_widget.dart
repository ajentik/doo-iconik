import 'package:flutter/material.dart';
import 'icon_data.dart';

enum DooIconikSize { xs, sm, md, lg, xl, xxl }

class DooIconik extends StatelessWidget {
  final String name;
  final DooIconikSize size;
  final double? customSize;
  final bool spin;
  final bool pulse;
  final bool bounce;
  final bool flipHorizontal;
  final bool flipVertical;
  final Color? color;

  const DooIconik({
    super.key,
    required this.name,
    this.size = DooIconikSize.md,
    this.customSize,
    this.spin = false,
    this.pulse = false,
    this.bounce = false,
    this.flipHorizontal = false,
    this.flipVertical = false,
    this.color,
  });

  static const _sizeMap = {
    DooIconikSize.xs: 12.0,
    DooIconikSize.sm: 16.0,
    DooIconikSize.md: 24.0,
    DooIconikSize.lg: 32.0,
    DooIconikSize.xl: 48.0,
    DooIconikSize.xxl: 64.0,
  };

  double get _pixelSize => customSize ?? _sizeMap[size]!;

  @override
  Widget build(BuildContext context) {
    final data = iconData[name];
    if (data == null) return const SizedBox.shrink();

    final iconColor = color ?? IconTheme.of(context).color ?? Theme.of(context).colorScheme.onSurface;

    Widget icon = CustomPaint(
      size: Size(_pixelSize, _pixelSize),
      painter: _DooIconikPainter(data: data, color: iconColor),
    );

    // Apply transforms
    if (flipHorizontal || flipVertical) {
      icon = Transform(
        alignment: Alignment.center,
        transform: Matrix4.identity()
          ..scale(flipHorizontal ? -1.0 : 1.0, flipVertical ? -1.0 : 1.0),
        child: icon,
      );
    }

    // Apply animations
    if (spin) icon = _SpinAnimation(child: icon);
    if (pulse) icon = _PulseAnimation(child: icon);
    if (bounce) icon = _BounceAnimation(child: icon);

    return SizedBox(width: _pixelSize, height: _pixelSize, child: icon);
  }
}

class _DooIconikPainter extends CustomPainter {
  final DooIconikData data;
  final Color color;

  _DooIconikPainter({required this.data, required this.color});

  @override
  void paint(Canvas canvas, Size size) {
    final scaleX = size.width / data.width;
    final scaleY = size.height / data.height;

    final paint = Paint()..color = color;

    if (data.stroke) {
      paint
        ..style = PaintingStyle.stroke
        ..strokeWidth = 2.0 * scaleX
        ..strokeCap = StrokeCap.round
        ..strokeJoin = StrokeJoin.round;
    } else {
      paint.style = PaintingStyle.fill;
    }

    canvas.scale(scaleX, scaleY);

    for (final pathStr in data.paths) {
      try {
        final path = _parseSvgPath(pathStr);
        canvas.drawPath(path, paint);
      } catch (_) {}
    }

    if (data.circles != null) {
      for (final c in data.circles!) {
        canvas.drawCircle(Offset(c['cx']!, c['cy']!), c['r']!, paint);
      }
    }

    if (data.lines != null) {
      for (final l in data.lines!) {
        canvas.drawLine(Offset(l['x1']!, l['y1']!), Offset(l['x2']!, l['y2']!), paint);
      }
    }
  }

  @override
  bool shouldRepaint(covariant _DooIconikPainter old) =>
      old.data != data || old.color != color;
}

// Simple SVG path parser supporting M, L, C, Z, Q, A commands
Path _parseSvgPath(String d) {
  final path = Path();
  final regex = RegExp(r'([MmLlHhVvCcSsQqTtAaZz])\s*([^MmLlHhVvCcSsQqTtAaZz]*)');
  double cx = 0, cy = 0;

  for (final match in regex.allMatches(d)) {
    final cmd = match.group(1)!;
    final argsStr = match.group(2)?.trim() ?? '';
    final nums = RegExp(r'-?[\d.]+').allMatches(argsStr).map((m) => double.parse(m.group(0)!)).toList();

    switch (cmd) {
      case 'M':
        if (nums.length >= 2) { cx = nums[0]; cy = nums[1]; path.moveTo(cx, cy); }
        for (int i = 2; i + 1 < nums.length; i += 2) { cx = nums[i]; cy = nums[i+1]; path.lineTo(cx, cy); }
        break;
      case 'm':
        if (nums.length >= 2) { cx += nums[0]; cy += nums[1]; path.moveTo(cx, cy); }
        break;
      case 'L':
        for (int i = 0; i + 1 < nums.length; i += 2) { cx = nums[i]; cy = nums[i+1]; path.lineTo(cx, cy); }
        break;
      case 'l':
        for (int i = 0; i + 1 < nums.length; i += 2) { cx += nums[i]; cy += nums[i+1]; path.lineTo(cx, cy); }
        break;
      case 'H':
        if (nums.isNotEmpty) { cx = nums[0]; path.lineTo(cx, cy); }
        break;
      case 'h':
        if (nums.isNotEmpty) { cx += nums[0]; path.lineTo(cx, cy); }
        break;
      case 'V':
        if (nums.isNotEmpty) { cy = nums[0]; path.lineTo(cx, cy); }
        break;
      case 'v':
        if (nums.isNotEmpty) { cy += nums[0]; path.lineTo(cx, cy); }
        break;
      case 'C':
        for (int i = 0; i + 5 < nums.length; i += 6) {
          path.cubicTo(nums[i], nums[i+1], nums[i+2], nums[i+3], nums[i+4], nums[i+5]);
          cx = nums[i+4]; cy = nums[i+5];
        }
        break;
      case 'c':
        for (int i = 0; i + 5 < nums.length; i += 6) {
          path.cubicTo(cx+nums[i], cy+nums[i+1], cx+nums[i+2], cy+nums[i+3], cx+nums[i+4], cy+nums[i+5]);
          cx += nums[i+4]; cy += nums[i+5];
        }
        break;
      case 'Q':
        for (int i = 0; i + 3 < nums.length; i += 4) {
          path.quadraticBezierTo(nums[i], nums[i+1], nums[i+2], nums[i+3]);
          cx = nums[i+2]; cy = nums[i+3];
        }
        break;
      case 'q':
        for (int i = 0; i + 3 < nums.length; i += 4) {
          path.quadraticBezierTo(cx+nums[i], cy+nums[i+1], cx+nums[i+2], cy+nums[i+3]);
          cx += nums[i+2]; cy += nums[i+3];
        }
        break;
      case 'Z':
      case 'z':
        path.close();
        break;
    }
  }
  return path;
}

// Animation widgets
class _SpinAnimation extends StatefulWidget {
  final Widget child;
  const _SpinAnimation({required this.child});
  @override
  State<_SpinAnimation> createState() => _SpinAnimationState();
}
class _SpinAnimationState extends State<_SpinAnimation> with SingleTickerProviderStateMixin {
  late final AnimationController _ctrl;
  @override void initState() { super.initState(); _ctrl = AnimationController(vsync: this, duration: const Duration(seconds: 1))..repeat(); }
  @override void dispose() { _ctrl.dispose(); super.dispose(); }
  @override Widget build(BuildContext context) => RotationTransition(turns: _ctrl, child: widget.child);
}

class _PulseAnimation extends StatefulWidget {
  final Widget child;
  const _PulseAnimation({required this.child});
  @override
  State<_PulseAnimation> createState() => _PulseAnimationState();
}
class _PulseAnimationState extends State<_PulseAnimation> with SingleTickerProviderStateMixin {
  late final AnimationController _ctrl;
  @override void initState() { super.initState(); _ctrl = AnimationController(vsync: this, duration: const Duration(seconds: 2))..repeat(reverse: true); }
  @override void dispose() { _ctrl.dispose(); super.dispose(); }
  @override Widget build(BuildContext context) => FadeTransition(opacity: Tween(begin: 0.5, end: 1.0).animate(_ctrl), child: widget.child);
}

class _BounceAnimation extends StatefulWidget {
  final Widget child;
  const _BounceAnimation({required this.child});
  @override
  State<_BounceAnimation> createState() => _BounceAnimationState();
}
class _BounceAnimationState extends State<_BounceAnimation> with SingleTickerProviderStateMixin {
  late final AnimationController _ctrl;
  @override void initState() { super.initState(); _ctrl = AnimationController(vsync: this, duration: const Duration(seconds: 1))..repeat(reverse: true); }
  @override void dispose() { _ctrl.dispose(); super.dispose(); }
  @override Widget build(BuildContext context) => SlideTransition(
    position: Tween(begin: Offset.zero, end: const Offset(0, -0.25)).animate(CurvedAnimation(parent: _ctrl, curve: Curves.easeInOut)),
    child: widget.child,
  );
}
