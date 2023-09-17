import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, TEXT } from '../../../constants/theme'
import {HeightSpacer, NetworkImage, ReusableText} from '../../index'

const Country = ({item}) => {
  return (
    <TouchableOpacity>
        <View>
            <NetworkImage
            source={item.imageUrl}
            width={85}
            height={85}
            radius={12}
            />

            <HeightSpacer height={5}/>

            <ReusableText
            text={item.country}
            family={"medium"}
            size={TEXT.medium}
            color={COLORS.black}
            align={"center"}
            />
        </View>
    </TouchableOpacity>
  )
}

export default Country