class Api::V1::IssuesController < ApplicationController

  def index
    issues = Issue.all
    render json: issues, status: 200
  end

  def find
    issue = Issue.find_by(id: params[:id])
    render json: issue, status: 200
  end

  def find_by_project
    issues = Issue.where(project_id: params[:project_id])
    render json: issues, status: 200
  end

  def find_by_team
    issues = Issue.where(team_id: params[:team_id])
    render json: issues, status: 200
  end

  def find_by_user
    issues = Issue.where(user_id: params[:user_id])
    render json: issues, status: 200
  end

  def find_by_issue_type
    issues = Issue.where(issue_type_id: params[:issue_type_id])
    render json: issues, status: 200
  end

  def create
    issue = Issue.new(issue_params)
    if issue.save
      render json: issue, status: 200
    else
      render json: {error: "Issue not created"}
    end
  end

  def update
    issue = Issue.find_by(id: params[:id])
    issue.update(issue_params)
    if issue.save
      render json: issue, status: 200
    else
      render json: {error: "Issue not updated"}
    end
  end

  def delete
    issue = Issue.find_by(id: params[:id])
    issue.destory
    render json: {message: "Issue deleted"}, status: 200
  end
end