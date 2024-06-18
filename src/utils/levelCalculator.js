const calculateLevel = (score) => {
    let level = '';
    
    if (score <= 40) level = '0-40: A1-low';
    else if (score <= 48) level = '41-48: A1-High';
    else if (score <= 56) level = '49-56: A2-Low';
    else if (score <= 65) level = '57-65: A2-High';
    else if (score <= 74) level = '66-74: B1-Low';
    else if (score <= 83) level = '75-83: B1-Low-Medium';
    else if (score <= 92) level = '84-92: B1-Medium-High';
    else if (score <= 100) level = '93-100: B1-High';

    return level
}

export default calculateLevel;