import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, createElement, ReactNode, useContext, useEffect, useMemo, useState } from 'react';
import { Appearance } from 'react-native';

export type ThemeName = 'light' | 'dark';

export interface Theme {
    header: string;
    titleText: string;
    subtitleText: string;
    pageBackground: string;
    bridge: string;
    tileCircle: string;
    tileCircleBorder: string;
    tileCircleBorderWidth: number;
    tileLabel: string;
    cartIcon: string;
    settingsGear: string;
    card: string;
    cardBorder: string;
    cardTitle: string;
    bodyText: string;
    mutedText: string;
    headerButton: string;
    buttonPrimary: string;
    buttonPrimaryText: string;
    buttonNeutral: string;
    buttonNeutralBorder: string;
    buttonNeutralText: string;
    chip: string;
    buttonDelete: string;
    buttonDeleteText: string;
    stockedButton: string;
    stockedButtonBorder: string;
    stockedButtonText: string;
    rowSelected: string;
    rowSelectedBorder: string;
    rowReminderBorder: string;
    pill: string;
    pillSelected: string;
    switchTrackOn: string;
    switchTrackOff: string;
    switchThumb: string;
    buttonDone: string;
    buttonDoneText: string;
    countdown: string;
    settingValue: string;
    settingArrow: string;
    progressTrack: string;
    delay: string;
    delayText: string;
    timeStepper: string;
    timeStepperBorder: string;
    timeStepperText: string;
    titleSize: number;
    titleWeight: '500' | '600';
    subtitleSize: number;
    subtitleWeight: '400' | '500';
    tileLabelSize: number;
    tileLabelFont: string | undefined;
    iconShadow: boolean;
    tileHalo: string;
    tileHaloOpacity: number;
    tileHaloRadius: number;
    statusBarOnHeader: 'light' | 'dark';
    statusBarOnPage: 'light' | 'dark';
}

export const Themes: Record<ThemeName, Theme> = {
    light: {
        header: '#1a6e8a',
        titleText: '#ffffff',
        subtitleText: '#a8d4e0',
        pageBackground: '#b6c1c5',
        bridge: '#2d9e8f',
        tileCircle: '#4caba1',
        tileCircleBorder: '#1a6e8a',
        tileCircleBorderWidth: 2,
        tileLabel: '#1a6e8a',
        cartIcon: '#d8dde3',
        settingsGear: '#4caba1',
        card: '#ffffff',
        cardBorder: '#a8d4e0',
        cardTitle: '#1a6e8a',
        bodyText: '#1a6e8a',
        mutedText: '#888888',
        headerButton: '#ffffff',
        buttonPrimary: '#1a6e8a',
        buttonPrimaryText: '#ffffff',
        buttonNeutral: '#cccccc',
        buttonNeutralBorder: '#cccccc',
        buttonNeutralText: '#333333',
        chip: '#ffffff',
        buttonDelete: '#e74c3c',
        buttonDeleteText: '#ffffff',
        stockedButton: '#2d9e8f',
        stockedButtonBorder: '#2d9e8f',
        stockedButtonText: '#ffffff',
        rowSelected: '#d6eef8',
        rowSelectedBorder: '#1a6e8a',
        rowReminderBorder: '#6dc6e3',
        pill: '#2d9e8f',
        pillSelected: '#2d9e8f',
        switchTrackOn: '#1a6e8a',
        switchTrackOff: '#cccccc',
        switchThumb: '#ffffff',
        buttonDone: '#27ae60',
        buttonDoneText: '#ffffff',
        countdown: '#2d9e8f',
        settingValue: '#2d9e8f',
        settingArrow: '#a8d4e0',
        progressTrack: '#e0e0e0',
        delay: '#FF9500',
        delayText: '#ffffff',
        timeStepper: '#1a6e8a',
        timeStepperBorder: '#1a6e8a',
        timeStepperText: '#ffffff',
        titleSize: 28,
        titleWeight: '500',
        subtitleSize: 21,
        subtitleWeight: '400',
        tileLabelSize: 20,
        tileLabelFont: 'Georgia',
        iconShadow: false,
        tileHalo: '#1a6e8a',
        tileHaloOpacity: 0,
        tileHaloRadius: 8,
        statusBarOnHeader: 'light',
        statusBarOnPage: 'dark',
    },
    dark: {
        header: '#f0a83a',
        titleText: '#4a1f0c',
        subtitleText: '#6b3418',
        pageBackground: '#3a3024',
        bridge: '#c9622e',
        tileCircle: '#c9622e',
        tileCircleBorder: '#f0a83a',
        tileCircleBorderWidth: 3,
        tileLabel: '#f0a83a',
        cartIcon: '#d8dde3',
        settingsGear: '#c9622e',
        card: '#4a3e30',
        cardBorder: '#a3481f',
        cardTitle: '#f0a83a',
        bodyText: '#ccc3ac',
        mutedText: '#d8cbaa',
        headerButton: '#4a1f0c',
        buttonPrimary: '#c9622e',
        buttonPrimaryText: '#fff6de',
        buttonNeutral: '#4a3e30',
        buttonNeutralBorder: '#f0a83a',
        buttonNeutralText: '#f0a83a',
        chip: '#3a3024',
        buttonDelete: '#e74c3c',
        buttonDeleteText: '#ffffff',
        stockedButton: '#3a3024',
        stockedButtonBorder: '#f0a83a',
        stockedButtonText: '#f0a83a',
        rowSelected: '#5c5044',
        rowSelectedBorder: '#f0a83a',
        rowReminderBorder: '#f0a83a',
        pill: '#f0a83a',
        pillSelected: '#c9622e',
        switchTrackOn: '#c9622e',
        switchTrackOff: '#5c5044',
        switchThumb: '#fff6de',
        buttonDone: '#27ae60',
        buttonDoneText: '#ffffff',
        countdown: '#fff6de',
        settingValue: '#ccc3ac',
        settingArrow: '#e9dcba',
        progressTrack: '#5c5044',
        delay: '#FF9500',
        delayText: '#4a1f0c',
        timeStepper: '#4a3e30',
        timeStepperBorder: '#f0a83a',
        timeStepperText: '#f0a83a',
        titleSize: 28,
        titleWeight: '600',
        subtitleSize: 21,
        subtitleWeight: '400',
        tileLabelSize: 20,
        tileLabelFont: 'Georgia',
        iconShadow: true,
        tileHalo: '#f0a83a',
        tileHaloOpacity: 0,
        tileHaloRadius: 7,
        statusBarOnHeader: 'dark',
        statusBarOnPage: 'light',
    },
};

export const DEFAULT_THEME: ThemeName = 'light';

export type PopupStyle = 'match' | 'phone';

export const THEME_STORAGE_KEY = 'app_theme';
export const POPUP_STORAGE_KEY = 'popup_style';

interface ThemeControls {
    themeName: ThemeName;
    setThemeName: (name: ThemeName) => void;
    popupStyle: PopupStyle;
    setPopupStyle: (style: PopupStyle) => void;
    preferencesReady: boolean;
}

const ThemeContext = createContext<ThemeControls | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [themeName, setThemeNameState] = useState<ThemeName>(DEFAULT_THEME);
    const [popupStyle, setPopupStyleState] = useState<PopupStyle>('match');
    const [preferencesReady, setPreferencesReady] = useState(false);

    useEffect(() => {
        (async () => {
            let loadedTheme: ThemeName = DEFAULT_THEME;
            let loadedPopup: PopupStyle = 'match';
            try {
                const t = await AsyncStorage.getItem(THEME_STORAGE_KEY);
                if (t === 'light' || t === 'dark') loadedTheme = t;
                const p = await AsyncStorage.getItem(POPUP_STORAGE_KEY);
                if (p === 'match' || p === 'phone') loadedPopup = p;
                setThemeNameState(loadedTheme);
                setPopupStyleState(loadedPopup);
            } catch (e) {
                console.error(e);
            } finally {
                Appearance.setColorScheme(loadedPopup === 'match' ? loadedTheme : null);
                setPreferencesReady(true);
            }
        })();
    }, []);

    useEffect(() => {
        Appearance.setColorScheme(popupStyle === 'match' ? themeName : null);
    }, [themeName, popupStyle]);

    const setThemeName = (name: ThemeName) => {
        setThemeNameState(name);
        AsyncStorage.setItem(THEME_STORAGE_KEY, name).catch(console.error);
    };
    const setPopupStyle = (style: PopupStyle) => {
        setPopupStyleState(style);
        AsyncStorage.setItem(POPUP_STORAGE_KEY, style).catch(console.error);
    };

    return createElement(
        ThemeContext.Provider,
        {
            value: {
                themeName,
                setThemeName,
                popupStyle,
                setPopupStyle,
                preferencesReady,
            },
        },
        children,
    );
}

export function useTheme(): Theme {
    const ctx = useContext(ThemeContext);
    const name = ctx ? ctx.themeName : DEFAULT_THEME;
    return useMemo(() => Themes[name], [name]);
}

export function useThemeControls(): ThemeControls {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error('useThemeControls must be used inside ThemeProvider');
    return ctx;
}
