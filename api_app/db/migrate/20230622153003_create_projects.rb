class CreateProjects < ActiveRecord::Migration[7.0]
  def change
    create_table :projects do |t|
      t.string :name
      t.string :description
      t.string :avatar
      t.integer :team

      t.timestamps
    end
  end
end
