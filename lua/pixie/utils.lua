local utils = {}

-- https://neovim.discourse.group/t/function-that-return-visually-selected-text/1601
function utils.get_selection()
  local s_start = vim.fn.getpos("'<")
  local s_end = vim.fn.getpos("'>")
  local n_lines = math.abs(s_end[2] - s_start[2]) + 1
  local lines = vim.api.nvim_buf_get_lines(0, s_start[2] - 1, s_end[2], false)

  if (lines[1] == nil) then
    return nil
  end

  lines[1] = string.sub(lines[1], s_start[3], -1)
  if n_lines == 1 then
    lines[n_lines] = string.sub(lines[n_lines], 1, s_end[3] - s_start[3] + 1)
  else
    lines[n_lines] = string.sub(lines[n_lines], 1, s_end[3])
  end

  return table.concat(lines, '\n')
end

function utils.get_language()
  return vim.bo.filetype
end

local current_path = debug.getinfo(1).source:sub(2)
utils.project_root_path = string.gsub(current_path, "/lua/pixie/utils.lua$", "")

return utils
