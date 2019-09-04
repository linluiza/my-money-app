function selectTab(tabId){
    return {
        type: 'TAB_SELECTED',
        payload: tabId
    }
}

function showTabs(...tabIds){
    const tabsToShow = {}
    tabIds.forEach(e => tabsToShow[e]= true)

    return {
        type: 'TAB_VISIBLE',
        payload: tabsToShow
    }
}

export {selectTab, showTabs}