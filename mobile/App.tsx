import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { Text, View, Button, TextInput } from 'react-native'

export default function App() {
  const [item, setItem] = useState('')
  const [listItem, setListItem] = useState<string[]>([])

  const addItem = (item: string) => {
    setListItem((oldList) => [...oldList, item])
    setItem('')
  }

  const removeItem = (item: string) => {
    setListItem(listItem.filter((itemList) => itemList !== item))
  }
  return (
    <View className="box-border flex-1 bg-gray-700 p-2">
      <View className="gap-3 pt-12">
        <Text className="text-xl capitalize text-white">Lista de Tarefas</Text>
        <View className="flex-row justify-between gap-1">
          <TextInput
            className="w-3/4 rounded bg-gray-400 p-2 font-semibold italic text-white"
            placeholder="Digite um item"
            value={item}
            onChangeText={(text) => setItem(text)}
          />
          <Button title="ADD ITEM" onPress={() => addItem(item)} />
        </View>
      </View>
      <View className="w-full flex-col gap-2 pt-2">
        {listItem &&
          listItem.map((item) => (
            <View
              key={item}
              className="flex w-full flex-row items-center justify-between"
            >
              <Text className="italic text-white">- {item}</Text>
              <Button title="remover" onPress={() => removeItem(item)} />
            </View>
          ))}
      </View>
      <StatusBar style="light" />
    </View>
  )
}
