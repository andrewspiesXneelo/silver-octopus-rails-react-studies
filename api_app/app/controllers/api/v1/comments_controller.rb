class Api::V1::CommentsController < ApplicationController
  def index
    comments = Comment.all
    render json: comments, status: 200
  end

  def find
    comment = Comment.find_by(id: params[:id])
    render json: comment, status: 200
  end

  def find_by_issue
    comments = Comment.where(issue_id: params[:issue_id])
    render json: comments, status: 200
  end

  def find_by_user
    comments = Comment.where(user_id: params[:user_id])
    render json: comments, status: 200
  end

  def find_by_project
    comments = Comment.where(project_id: params[:project_id])
    render json: comments, status: 200
  end

  def find_by_team
    comments = Comment.where(team_id: params[:team_id])
    render json: comments, status: 200
  end

  def create
    comment = Comment.new(comment_params)
    if comment.save
      render json: comment, status: 200
    else
      render json: {error: "Comment not created"}
    end
  end

  def update
    comment = Comment.find_by(id: params[:id])
    comment.update(comment_params)
    if comment.save
      render json: comment, status: 200
    else
      render json: {error: "Comment not updated"}
    end
  end

  def delete
    comment = Comment.find_by(id: params[:id])
    comment.destory
    render json: {message: "Comment deleted"}, status: 200
  end
end
