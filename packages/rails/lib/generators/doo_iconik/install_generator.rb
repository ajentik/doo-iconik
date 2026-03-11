# frozen_string_literal: true

module DooIconik
  module Generators
    class InstallGenerator < Rails::Generators::Base
      source_root File.expand_path('templates', __dir__)

      desc 'Copies doo-iconik animation stylesheet into your application.'

      def copy_stylesheet
        copy_file 'doo_iconik.css', 'app/assets/stylesheets/doo_iconik.css'
      end
    end
  end
end
