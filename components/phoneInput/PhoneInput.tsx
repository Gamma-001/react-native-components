import { FlatList, Pressable, View, Image, Text } from 'react-native';
import countryCodes from './data/codes.json';

import sources from './flagSources';

import style from './PhoneInput.style'

interface PhoneInputProps {
    placeholder?: string
};
export default function PhoneInput({ placeholder }: PhoneInputProps) {
    return (
        <View>
            <Pressable style = { style.input }>
                <Text>{ placeholder || 'Select' }</Text>
            </Pressable>
            <View>
                <FlatList 
                    data = { countryCodes }
                    renderItem = {({ item }) => {
                        return <View style = { style.item }>
                            <Image style = { style.flag } source = { sources[`flag-${item.code}`] } resizeMode = 'contain'/>
                            <View style = { style.itemRight }>
                                <Text style = { style.itemText }>{ item.name }</Text>
                                <Text style = { style.itemText }>{ item.dial_code }</Text>
                            </View>
                        </View>
                    }}
                />
            </View>
        </View>
    );
}