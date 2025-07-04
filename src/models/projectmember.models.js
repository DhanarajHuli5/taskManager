import mongoose from "mongoose";
import {AvailableUserRoles, UserRolesEnum } from "../utils/constants.js"
const projectMemberSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
        required: true
    },
    role: {
        type: String,
        enum: AvailableUserRoles,
        default: UserRolesEnum.MEMBER
    }
},{timestamps})

export const ProjectMember = mongoose.model('ProjectMember', projectMemberSchema)