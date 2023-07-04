class Api::V1::ProjectsController < ApplicationController
  def index
    projects = Project.all
    render json: projects, status: 200
  end

  def find
    project = Project.find_by(id: params[:id])
    render json: project, status: 200
  end

  def find_by_team
    projects = Project.where(team_id: params[:team_id])
    render json: projects, status: 200
  end

  def find_by_user
    projects = Project.where(user_id: params[:user_id])
    render json: projects, status: 200
  end

  def create
    project = Project.new(project_params)
    if project.save
      render json: project, status: 200
    else
      render json: {error: "Project not created"}
    end
  end

  def update
    project = Project.find_by(id: params[:id])
    project.update(project_params)
    if project.save
      render json: project, status: 200
    else
      render json: {error: "Project not updated"}
    end
  end

  def delete
    project = Project.find_by(id: params[:id])
    project.destory
    render json: {message: "Project deleted"}, status: 200
  end
end
