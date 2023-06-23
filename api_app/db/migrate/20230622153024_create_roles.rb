class CreateRoles < ActiveRecord::Migration[7.0]
  def change
    create_table :roles do |t|
      t.binary :teamId, array: true
      t.string :name
      t.string :description
      t.binary :accessRights, array: true

      t.timestamps
    end
  end
end
