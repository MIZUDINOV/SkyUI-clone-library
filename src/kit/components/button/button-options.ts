import { InjectionToken } from '@angular/core';

export interface ButtonOptions {
    readonly size: string;
    readonly shape: 'square' | 'rounded' | null;
    readonly appearance: string;
}

export const SUI_BUTTON_DEFAULT_OPTIONS: ButtonOptions = {
    size: '1',
    shape: null,
    appearance: '',
};

export const SUI_BUTTON_OPTIONS = new InjectionToken<ButtonOptions>(
    'Default parameters for button component',
    {
        factory: () => SUI_BUTTON_DEFAULT_OPTIONS,
    }
);
