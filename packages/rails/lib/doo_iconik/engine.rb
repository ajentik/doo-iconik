# frozen_string_literal: true

module DooIconik
  class Engine < ::Rails::Engine
    initializer 'doo_iconik.helpers' do
      ActiveSupport.on_load(:action_view) do
        include DooIconik::Helper
      end
    end
  end
end
