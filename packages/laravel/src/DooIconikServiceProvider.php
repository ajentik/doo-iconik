<?php

namespace DooIconik\Laravel;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Blade;

class DooIconikServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->app->singleton(IconRepository::class, function () {
            return new IconRepository();
        });
    }

    public function boot(): void
    {
        Blade::directive('dooiconik', function (string $expression) {
            return "<?php echo app(\\DooIconik\\Laravel\\IconRepository::class)->render({$expression}); ?>";
        });

        Blade::component('doo-iconik', DooIconikComponent::class);

        $this->publishes([
            __DIR__ . '/../resources/css/doo-iconik.css' => public_path('vendor/doo-iconik/doo-iconik.css'),
        ], 'doo-iconik-assets');
    }
}
