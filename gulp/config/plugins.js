import replace from 'gulp-replace'; // Search and Replace
import plumber from 'gulp-plumber'; // Обработка ошибок
import notify from 'gulp-notify'; // Messages (tips)
import browsersync from 'browser-sync'; // local server
import newer from 'gulp-newer'; // checking for updates
import ifPlugin from 'gulp-if'; // Conditional branching


// Exporting an object
export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    browsersync: browsersync,
    newer: newer,
    if: ifPlugin
}