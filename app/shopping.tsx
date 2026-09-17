import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import {
    Alert,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Cover } from '../components/Cover';
import { HeaderButton, PageFrame, uprightInLandscape, useLandscape } from '../components/PageFrame';
import { useLandscapeHeaderSide } from '../components/AppOrientation';
import { Theme, useTheme, useThemeControls } from '../constants/Themes';

interface Item {
    id: string;
    name: string;
    status: 'need' | 'stocked';
}

export default function ShoppingScreen() {
    const theme = useTheme();
    const { themeName, setThemeName } = useThemeControls();
    const styles = makeStyles(theme);
    const landscape = useLandscape();
    const headerSide = useLandscapeHeaderSide();
    const [items, setItems] = useState<Item[]>([]);
    const [newItem, setNewItem] = useState('');
    const [showAdd, setShowAdd] = useState(false);
    const [view, setView] = useState<'inventory' | 'shopping'>('inventory');
    const [selectedId, setSelectedId] = useState<string | null>(null);

    useEffect(() => {
        loadItems();
    }, []);

    const loadItems = async () => {
        const saved = await AsyncStorage.getItem('shopping_items');
        if (saved) setItems(JSON.parse(saved));
    };

    const saveItems = async (updated: Item[]) => {
        setItems(updated);
        await AsyncStorage.setItem('shopping_items', JSON.stringify(updated));
    };

    const addItem = () => {
        if (!newItem.trim()) return;
        const item: Item = {
            id: Date.now().toString(),
            name: newItem.trim(),
            status: 'need',
        };
        saveItems([...items, item]);
        setNewItem('');
        setShowAdd(false);
    };

    const toggleStatus = (id: string) => {
        const updated = items.map(i =>
            i.id === id
                ? { ...i, status: i.status === 'need' ? 'stocked' : 'need' }
                : i
        ) as Item[];
        saveItems(updated);
    };

    const deleteItem = (id: string) => {
        Alert.alert('Delete Item', 'Remove this item from your inventory?', [
            { text: 'Cancel', style: 'cancel' },
            {
                text: 'Delete',
                style: 'destructive',
                onPress: () => saveItems(items.filter(i => i.id !== id)),
            },
        ]);
    };

    const moveItem = (id: string, direction: 'up' | 'down') => {
        const index = items.findIndex(i => i.id === id);
        if (direction === 'up' && index === 0) return;
        if (direction === 'down' && index === items.length - 1) return;
        const updated = [...items];
        const swapIndex = direction === 'up' ? index - 1 : index + 1;
        [updated[index], updated[swapIndex]] = [updated[swapIndex], updated[index]];
        saveItems(updated);
    };

    const displayItems = view === 'shopping'
        ? items.filter(i => i.status === 'need')
        : items;

    const otherView = view === 'inventory' ? 'shopping' : 'inventory';
    const currentTitle = view === 'inventory' ? 'Inventory' : 'Shopping';
    const otherTitle = otherView === 'inventory' ? 'Inventory' : 'Shopping';
    const themeGlyph = themeName === 'dark' ? '☀' : '🌙';

    const flipPage = () => {
        setView(otherView);
        if (otherView === 'shopping') setSelectedId(null);
    };

    return (
        <GestureHandlerRootView style={styles.container}>
            <PageFrame
                headerColor={theme.header}
                header={
                    <View style={styles.header}>
                        <View style={styles.headerSide}>
                            <TouchableOpacity
                                onPress={flipPage}
                                style={[
                                    styles.flipBtn,
                                    { borderColor: theme.headerButton },
                                    uprightInLandscape(landscape, headerSide),
                                ]}
                                activeOpacity={0.7}
                            >
                                <Text style={styles.headerBtnText}>{otherTitle}</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.title}>{currentTitle}</Text>
                        <View style={styles.headerRight}>
                            <TouchableOpacity
                                onPress={() => setThemeName(themeName === 'dark' ? 'light' : 'dark')}
                                style={[
                                    styles.themeBtn,
                                    { borderColor: theme.headerButton },
                                    uprightInLandscape(landscape, headerSide),
                                ]}
                                activeOpacity={0.7}
                            >
                                <Text style={styles.themeBtnText}>{themeGlyph}</Text>
                            </TouchableOpacity>
                            <HeaderButton onPress={() => { setNewItem(''); setShowAdd(true); }}>
                                <Text style={styles.headerBtnText}>+ Add</Text>
                            </HeaderButton>
                        </View>
                    </View>
                }
            >

            <ScrollView style={styles.list}>
                {displayItems.length === 0 && (
                    <Text style={styles.emptyText}>
                        {view === 'shopping' ? 'Nothing on your shopping list.' : 'No items yet. Tap + Add.'}
                    </Text>
                )}
                {displayItems.map(item => (
                    <Swipeable
                        key={item.id}
                        renderRightActions={() => (
                            view === 'inventory' ? (
                                <TouchableOpacity
                                    style={styles.swipeDelete}
                                    onPress={() => deleteItem(item.id)}
                                >
                                    <Text style={styles.swipeDeleteText}>Delete</Text>
                                </TouchableOpacity>
                            ) : null
                        )}
                    >
                        <TouchableOpacity
                            onPress={() => { if (view === 'inventory') setSelectedId(selectedId === item.id ? null : item.id); }}
                            activeOpacity={0.8}
                        >
                            <View style={[styles.itemRow, selectedId === item.id && styles.itemSelected]}>
                                <Text style={styles.itemName}>
                                    {item.name}
                                </Text>
                                <TouchableOpacity
                                    style={[styles.statusBtn, item.status === 'stocked' && styles.statusStocked]}
                                    onPress={() => toggleStatus(item.id)}
                                >
                                    <Text style={[styles.statusText, item.status === 'stocked' && styles.statusTextStocked]}>
                                        {item.status === 'need' ? 'Need' : 'Stocked'}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    </Swipeable>
                ))}
            </ScrollView>
            {selectedId && view === 'inventory' && (
                <View style={styles.arrowOverlay}>
                    <TouchableOpacity
                        style={styles.arrowBtn}
                        onPress={() => moveItem(selectedId, 'up')}
                    >
                        <Text style={styles.arrowText}>▲</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.arrowBtn}
                        onPress={() => moveItem(selectedId, 'down')}
                    >
                        <Text style={styles.arrowText}>▼</Text>
                    </TouchableOpacity>
                </View>
            )}
            </PageFrame>
            <Cover visible={showAdd}>
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
                    <View style={styles.modalOverlay}>
                        <View style={styles.pickerModal}>
                            <Text style={styles.modalTitle}>Add item</Text>
                            <TextInput
                                style={styles.input}
                                value={newItem}
                                onChangeText={setNewItem}
                                placeholder="Item name…"
                                placeholderTextColor={theme.mutedText}
                                onSubmitEditing={addItem}
                                returnKeyType="done"
                                autoFocus
                            />
                            <View style={styles.modalBtns}>
                                <TouchableOpacity
                                    style={styles.cancelBtn}
                                    onPress={() => { setShowAdd(false); setNewItem(''); }}
                                >
                                    <Text style={styles.cancelBtnText}>Cancel</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.confirmBtn} onPress={addItem}>
                                    <Text style={styles.confirmBtnText}>Add</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </Cover>
        </GestureHandlerRootView>
    );
}

const makeStyles = (t: Theme) =>
    StyleSheet.create({
        container: { flex: 1, backgroundColor: t.pageBackground },
        header: {
            backgroundColor: t.header,
            paddingTop: 20,
            paddingHorizontal: 12,
            flexDirection: 'row',
            alignItems: 'center',
            paddingBottom: 8,
            gap: 8,
        },
        headerSide: {
            minWidth: 110,
            alignItems: 'flex-start',
        },
        headerRight: {
            minWidth: 110,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: 8,
        },
        flipBtn: {
            minWidth: 54,
            height: 54,
            paddingHorizontal: 10,
            borderRadius: 27,
            borderWidth: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        themeBtn: {
            width: 28,
            height: 28,
            borderRadius: 4,
            borderWidth: 1.5,
            alignItems: 'center',
            justifyContent: 'center',
        },
        themeBtnText: {
            fontSize: 14,
            color: t.headerButton,
            lineHeight: 18,
        },
        title: {
            fontSize: 24,
            fontWeight: '500',
            color: t.titleText,
            fontStyle: 'italic',
            fontFamily: 'Georgia',
            flex: 1,
            textAlign: 'center',
        },
        headerBtnText: { color: t.headerButton, fontSize: 13, fontWeight: '600' },
        list: { flex: 1, padding: 12 },
        emptyText: { textAlign: 'center', color: t.mutedText, marginTop: 40, fontSize: 16 },
        itemRow: {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: t.card,
            borderRadius: 10,
            paddingVertical: 4,
            paddingHorizontal: 12,
            marginBottom: 8,
            borderWidth: 0.5,
            borderColor: t.cardBorder,
            gap: 12,
        },
        statusBtn: {
            backgroundColor: t.buttonPrimary,
            paddingVertical: 6,
            paddingHorizontal: 12,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: t.buttonPrimary,
        },
        swipeDelete: {
            backgroundColor: t.buttonDelete,
            justifyContent: 'center',
            alignItems: 'center',
            width: 80,
            borderRadius: 10,
            marginBottom: 8,
        },
        swipeDeleteText: {
            color: t.buttonDeleteText,
            fontWeight: '600',
            fontSize: 15,
        },
        statusStocked: {
            backgroundColor: t.stockedButton,
            borderColor: t.stockedButtonBorder,
        },
        statusText: { color: t.buttonPrimaryText, fontWeight: '600', fontSize: 14 },
        statusTextStocked: { color: t.stockedButtonText },
        itemName: { flex: 1, fontSize: 18, color: t.bodyText },
        itemSelected: {
            backgroundColor: t.rowSelected,
            borderColor: t.rowSelectedBorder,
            borderWidth: 1.5,
        },
        arrowOverlay: {
            position: 'absolute',
            right: 16,
            bottom: 120,
            backgroundColor: t.buttonPrimary,
            borderRadius: 12,
            padding: 8,
            gap: 8,
            elevation: 10,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
        },
        arrowBtn: {
            padding: 10,
            alignItems: 'center',
        },
        arrowText: {
            color: t.buttonPrimaryText,
            fontSize: 22,
            fontWeight: '600',
        },
        modalOverlay: {
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.4)',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20,
        },
        pickerModal: {
            backgroundColor: t.card,
            borderRadius: 12,
            padding: 16,
            borderWidth: 0.5,
            borderColor: t.cardBorder,
            width: '100%',
        },
        modalTitle: { fontSize: 18, fontWeight: '600', color: t.cardTitle, marginBottom: 10 },
        input: {
            borderWidth: 0.5,
            borderColor: t.cardBorder,
            borderRadius: 8,
            padding: 10,
            fontSize: 16,
            color: t.bodyText,
            backgroundColor: t.pageBackground,
            marginBottom: 12,
        },
        modalBtns: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 6 },
        cancelBtn: {
            backgroundColor: t.buttonNeutral,
            borderWidth: 1,
            borderColor: t.buttonNeutralBorder,
            padding: 12,
            borderRadius: 8,
            flex: 1,
            alignItems: 'center',
            marginRight: 8,
        },
        cancelBtnText: { color: t.buttonNeutralText, fontWeight: '600' },
        confirmBtn: {
            backgroundColor: t.buttonPrimary,
            padding: 12,
            borderRadius: 8,
            flex: 1,
            alignItems: 'center',
        },
        confirmBtnText: { color: t.buttonPrimaryText, fontWeight: '600' },
    });
