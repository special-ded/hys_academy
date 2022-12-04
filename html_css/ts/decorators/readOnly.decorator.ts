export function ReadOnly(target: any, key: string, descriptors: PropertyDescriptor) {

  descriptors.writable = false;
}