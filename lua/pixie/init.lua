local utils = require("pixie.utils")
local run_js = require("pixie.run_js")

local pixie = {}

---@param args {mode: "copy" | "save", path: string | nil}
function pixie.generate_screenshot(args)
  local mode = args.mode
  local path = args.path
  local language = utils.get_language()

  local code = utils.get_selection()
  if (code == nil) then
    print("Please select text")
    return
  end
  code = utils.add_escape_chars(code)
  code = "\"" .. code .. "\""

  if (mode == "copy") then
    local params = { mode, code, language }
    run_js(table.concat(params, " "))
  else
    local params = { mode, code, language, path }
    run_js(table.concat(params, " "))
  end
end

return pixie
