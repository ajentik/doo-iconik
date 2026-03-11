# frozen_string_literal: true

require 'json'

module DooIconik
  SIZES = { xs: 12, sm: 16, md: 24, lg: 32, xl: 48, '2xl': 64 }.freeze

  class << self
    def icons
      @icons ||= load_icons
    end

    def icon(name)
      icons[name.to_s]
    end

    def icon_names
      icons.keys
    end

    private

    def load_icons
      json_path = File.expand_path('../../data/icon-data.json', __dir__)
      JSON.parse(File.read(json_path))
    end
  end
end
