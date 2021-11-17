# Use this file to easily define all of your cron jobs.
#
# It's helpful, but not entirely necessary to understand cron before proceeding.
# http://en.wikipedia.org/wiki/Cron

# Example:
APP_PATH = File.expand_path("../../", __FILE__)
LOG_DIR = "#{APP_PATH}/log"

every 1.day do
  command "cd #{APP_PATH} && npm run start", :output => { standard: "#{LOG_DIR}/cron_app_log.log" }
end

#
# every 4.days do
#   runner "AnotherModel.prune_old_records"
# end

# Learn more: http://github.com/javan/whenever
