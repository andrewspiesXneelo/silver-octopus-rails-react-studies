class Api::V1::IssueTypesController < ApplicationController
  def index
    issue_types = IssueType.all
    render json: issue_types, status: 200
  end

  def find
    issue_type = IssueType.find_by(id: params[:id])
    render json: issue_type, status: 200
  end

  def create
    issue_type = IssueType.new(issue_type_params)
    if issue_type.save
      render json: issue_type, status: 200
    else
      render json: {error: "IssueType not created"}
    end
  end

  def update
    issue_type = IssueType.find_by(id: params[:id])
    issue_type.update(issue_type_params)
    if issue_type.save
      render json: issue_type, status: 200
    else
      render json: {error: "IssueType not updated"}
    end
  end

  def delete
    issue_type = IssueType.find_by(id: params[:id])
    issue_type.destory
    render json: {message: "IssueType deleted"}, status: 200
  end
end
