export function ReadOnly(target: any, key: any, descriptors: any) {

  descriptors.writable = false;
}