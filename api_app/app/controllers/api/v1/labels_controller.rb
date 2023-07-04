class Api::V1::LabelsController < ApplicationController
  def index
    labels = Label.all
    render json: labels, status: 200
  end

  def find
    label = Label.find_by(id: params[:id])
    render json: label, status: 200
  end

  def create
    label = Label.new(label_params)
    if label.save
      render json: label, status: 200
    else
      render json: {error: "Label not created"}
    end
  end

  def update
    label = Label.find_by(id: params[:id])
    label.update(label_params)
    if label.save
      render json: label, status: 200
    else
      render json: {error: "Label not updated"}
    end
  end

  def delete
    label = Label.find_by(id: params[:id])
    label.destory
    render json: {message: "Label deleted"}, status: 200
  end
end
