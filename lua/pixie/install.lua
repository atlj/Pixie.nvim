local project_root = require("pixie.utils").project_root_path

local function install()
  -- This SHOULD work on every platform (let's hope so)
  -- TBH I'm not even sure why would a Windows user pick NeoVim
  -- Just go use Visual Studio Code you are already a Microsoft fan
  -- JK I'm also a Microsoft fan
  local command = "cd " .. project_root .. "/js && " .. "npm install --only=prod && npm run build"
  os.execute(command)
end

return install
