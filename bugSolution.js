The solution involves wrapping the data item within a React component.  Here's the corrected `renderItem` function:

```javascript
// Correct usage
<FlatList
  data={[{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }]}
  renderItem={({ item }) => (
    <View>
      <Text>{item.name}</Text>
    </View>
  )}
/>
```

This version returns a `View` component containing a `Text` component that displays the `name` property from each data item.  This ensures that React Native renders the data correctly.