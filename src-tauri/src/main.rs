// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use my_modules::*;

mod my_modules;

fn main() {
    app_lib::run();
}
