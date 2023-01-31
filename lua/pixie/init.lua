local utils = require("pixie.utils")

local pixie = {}

function pixie.hello()
  local selection = utils.get_language()
  print(selection)
end

return pixie
