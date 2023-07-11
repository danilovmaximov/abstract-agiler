import {createSlice} from "@reduxjs/toolkit";

export const generalAppTabs = {
    communicationTab: "comm",
    tasksTab: "tasks",
    repositoryTab: "repo",
    documentationTab: "doc"
};

export const generalAppInfoSlice = createSlice({
    name: "generalAppInfo",
    initialState: {
        currentPage: generalAppTabs.communicationTab
    },
    reducers: {
        communicationTab: state => {
            state.currentPage = generalAppTabs.communicationTab;
        },
        tasksTab: state => {
            state.currentPage = generalAppTabs.tasksTab;
        },
        repositoryTab: state => {
            state.currentPage = generalAppTabs.repositoryTab;
        },
        documentationTab: state => {
            state.currentPage = generalAppTabs.documentationTab;
        }
    }
});

export const {
    communicationTab,
    tasksTab,
    repositoryTab,
    documentationTab
} = generalAppInfoSlice.actions;
export default generalAppInfoSlice.reducer;