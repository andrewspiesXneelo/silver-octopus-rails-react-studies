class Api::V1::TeamsController < ApplicationController
  def index
    teams = Team.all
    render json: teams, status: 200
  end

  def find
    team = Team.find_by(id: params[:id])
    render json: team, status: 200
  end

  def create
    team = Team.new(team_params)
    if team.save
      render json: team, status: 200
    else
      render json: {error: "Team not created"}
    end
  end

  def update
    team = Team.find_by(id: params[:id])
    team.update(team_params)
    if team.save
      render json: team, status: 200
    else
      render json: {error: "Team not updated"}
    end  
  end

  def delete
    team = Team.find_by(id: params[:id])
    team.destory
    render json: {message: "Team deleted"}, status: 200
  end
end
