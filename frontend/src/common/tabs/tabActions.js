function selectTab(tabId){
    return {
        type: 'TAB_SELECTED',
        payload: tabId
    }
}

export {selectTab}