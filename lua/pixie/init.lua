local utils = require("pixie.utils")
local run_js = require("pixie.run_js")

local pixie = {}

---@param code string
local function write_code_to_file(code)
  local file_path = utils.project_root_path .. "/js/tempfile"
  local file, error = io.open(file_path, "w")

  if (error ~= nil) then
    return error
  end

  file:write(code)
  file:close()
  return true
end

---@param args {mode: "copy" | "save", path: string | nil, quality_multiplier: number | nil}
function pixie.generate_screenshot(args)
  setmetatable(args, { __index = { quality_multiplier = 1 } })

  local mode = args.mode
  local path = args.path
  local quality_multiplier = args.quality_multiplier
  local language = utils.get_language()

  local code = utils.get_selection()
  if (code == nil) then
    vim.notify("Please select text", vim.log.levels.WARN)
    return
  end

  local status = write_code_to_file(code)
  if (status ~= true) then
    print(status)
    return
  end

  if (mode == "copy") then
    local params = { mode, language, quality_multiplier }
    run_js(table.concat(params, " "), function() vim.notify("📋 Pixie has copied the image to your clipboard", vim.log.levels.INFO) end)
  else
    local params = { mode, language, quality_multiplier, path }
    run_js(table.concat(params, " "), function() vim.notify("🗄 Pixie has saved the image to: " .. path, vim.log.levels.INFO) end)
  end
end

return pixie
