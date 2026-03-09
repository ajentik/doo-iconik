import type { DoodleIconName, DoodleIconSize } from './types.js';
interface Props {
    name: DoodleIconName;
    size?: DoodleIconSize | number;
    spin?: boolean;
    pulse?: boolean;
    bounce?: boolean;
    flipHorizontal?: boolean;
    flipVertical?: boolean;
    class?: string;
    [key: string]: unknown;
}
declare const DoodleIcon: import("svelte").Component<Props, {}, "">;
type DoodleIcon = ReturnType<typeof DoodleIcon>;
export default DoodleIcon;
