
  const permissions = ''
export const usePermissions = () => {
  const hasPermissions = (perms? : string[]) => {
    return true //TODO need to fix it

    // if(perms){
    //   let access = false;
    //   perms.forEach((perm)=>{
    //     if(permissions.indexOf(perm)>=0) access = true;
    //   })
    //   return access;
    // }
    // else return true;
  }

  return {
    hasPermission: hasPermissions
  }
};

