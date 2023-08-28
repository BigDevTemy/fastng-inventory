class Helpers {
    static objectFormBuilder(form: FormData, object: Record<string, any>) {
      for (let name in object) {
        if (object.hasOwnProperty(name)) {
          if (object[name] === undefined || object[name] === null || object[name] === "null") {
            form.append(name, '');
          } else {
            form.append(name, object[name]);
          }
        }
      }
      return form;
    }
  
    static normalizeJson(object: Record<string, any>) {
      let newObject: Record<string, string> = {};
      for (let name in object) {
        if (object.hasOwnProperty(name)) {
          newObject[name] = object[name] ? object[name].toString() : '';
        }
      }
      return newObject;
    }
  
    static normalizeJsonStringify(object: Record<string, any>) {
      let newObject: Record<string, string> = {};
      for (let name in object) {
        if (object.hasOwnProperty(name)) {
          newObject[name] = object[name] !== null ? object[name].toString() : '';
        }
      }
      return newObject;
    }
  
    static getIdFromSlug(slug: string) {
      let name = slug.split("-");
      return name[name.length - 1];
    }
  
    static getTitleFromSlug(slug: string) {
      if (slug) {
        let name = slug.split("-");
        let length = name.length - 1;
        let title = "";
        for (let i = 0; i < length; i++) {
          title += name[i] + " ";
        }
        return title;
      }
      return "";
    }
  
    // ... rest of the methods
  
    static prepareAddress(address: string) {
      if (address) {
        let addIndex = address.indexOf("[");
        if (addIndex >= 0) {
          let parsAddress = JSON.parse(address);
          if (parsAddress.length > 0) {
            let parsedAddress = parsAddress[0];
            address = `${parsedAddress.house_number}, ${parsedAddress.street_name} ${parsedAddress.location} ${parsedAddress.city}`;
          } else {
            return "";
          }
        }
      }
      return address;
    }
  }
  
  export default Helpers;
  