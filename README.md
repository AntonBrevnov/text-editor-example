### Attention

Кастомная клавиатура на iOS не работает, если включена новая архитектура
Чтобы отключеть новую архитектуру для iOS, заходим в `ios/Podfile` и добавляем следующие строки
```ruby
# Disable New Architecture
ENV['RCT_NEW_ARCH_ENABLED'] = '0'
```

C Андройдом таких проблем нет, но если и там возникнет такой баг, то тоже стоит попробовать сначала отключить новую архитектуру. Для этого заходим в `android/gradle.properties` и для параметра `newArchEnabled` устанавливаем значение `false`

```properties
newArchEnabled=false
```

