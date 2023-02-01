local project_root = require("pixie.utils").project_root_path

local function run_js()
  local command = "cd " .. project_root .. "/js/lib && " .. "node index.js"
  os.execute(command)
end

return run_js
