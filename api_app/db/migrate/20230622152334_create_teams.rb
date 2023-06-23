class CreateTeams < ActiveRecord::Migration[7.0]
  def change
    create_table :teams do |t|
      t.string :name
      t.string :description
      t.string :avatar
      t.binary :users,  array: true
      t.binary :userRoles, array: true
      t.binary :projects, array: true
      t.binary :issues, array: true


      t.timestamps
    end
  end
end
