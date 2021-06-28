import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { View, Text, Image } from 'react-native';

import { styles } from './styles';
import DiscordImg from '../../assets/discord.png';

type ButtonIconProps = RectButtonProps & {
  title: string;
}

export function ButtonIcon({ title }: ButtonIconProps) {
  return (
    <RectButton style={styles.container} activeOpacity={0.7} >
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon} />
      </View>

      <Text style={styles.title}>
        { title }
      </Text>
    </RectButton>
  );
}