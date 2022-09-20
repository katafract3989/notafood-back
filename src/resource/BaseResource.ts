import {Injectable} from "@nestjs/common";

@Injectable()
export class BaseResource {

    apiWrapper(obj) {
        return {data: obj}
    }

    reformation(source, props: Record<string, string>) {
        const obj = {}
        for(let key in props) {
            obj[key] = source[props[key]]
        }
        return this.apiWrapper(obj)
    }

    omit(source, exclude: string[]) {
        const obj = source
        exclude.forEach(key => delete obj[key])
        return this.apiWrapper(obj)
    }

    pick(source, choose: string[]) {
        const obj = {}
        for(let key in choose) {
            obj[choose[key]] = source[choose[key]]
        }
        return this.apiWrapper(obj)
    }

}
