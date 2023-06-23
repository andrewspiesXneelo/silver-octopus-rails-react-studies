class CreateIssues < ActiveRecord::Migration[7.0]
  def change
    create_table :issues do |t|
      t.string :prefix
      t.string :title
      t.string :description
      t.integer :project
      t.binary :labels, array: true
      t.integer :status
      t.integer :issueType
      t.binary :reporter
      t.binary :assignees, array: true
      t.binary :comments, array: true
      t.boolean :archived 

      t.timestamps
    end
  end
end
