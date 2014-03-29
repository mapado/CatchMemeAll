Array::remove = (item) ->
    position = @indexOf(item)
    @[position..position] = [] if (position) > -1
