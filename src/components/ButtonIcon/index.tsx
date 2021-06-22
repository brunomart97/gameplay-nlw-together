import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

import { styles } from './styles';
import DiscordImg from '../../assets/discord.png';

interface ButtonIconProps {
  title: string;
}

export function ButtonIcon({ title }: ButtonIconProps) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7} >
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon} />
      </View>

      <Text style={styles.title}>
        { title }
      </Text>
    </TouchableOpacity>
  );
}