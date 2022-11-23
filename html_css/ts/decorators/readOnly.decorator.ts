export function ReadOnly(target: any, key: any, descriptors: PropertyDescriptor) {

  descriptors.writable = false;
}