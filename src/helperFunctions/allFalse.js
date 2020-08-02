function allFalse(filterList)
{
    for(var filter in filterList)
        if(filterList[filter]) return false;
    return true;
}

export default allFalse;