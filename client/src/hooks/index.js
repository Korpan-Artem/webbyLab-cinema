export function compareArrays(arr1, arr2) {
    const diffArr = [];
  
    arr1.forEach((item1) => {
      const foundItem = arr2.find((item2) => item2.title === item1.title);
      if (!foundItem) {
        diffArr.push({ title: item1.title, status: 1 });
      } else if (JSON.stringify(item1) !== JSON.stringify(foundItem)) {
        diffArr.push({ title: item1.title, status: 0 });
      }
    });

    const filteredArr = diffArr.filter((item) => item.status === 0);
  
    return filteredArr;
  }