// namespace
namespace cf {
	// interface
	export interface IBasicElementOptions{

	}

	export interface IBasicElement{
		el: HTMLElement;
		// template, can be overwritten ...
		getTemplate(): string;
	}

	// class
	export class BasicElement implements IBasicElement{
		public el: HTMLElement;

		public get width():number{
			const mr: number = parseInt(window.getComputedStyle(this.el).getPropertyValue("margin-right"), 10);
			return this.el.offsetWidth + mr;
		}

		constructor(options: IBasicElementOptions){
			this.setData(options);
			this.createElement();
		}

		protected setData(options: IBasicElementOptions){
			
		}

		protected createElement(): Element{
			var template: HTMLTemplateElement = document.createElement('template');
			template.innerHTML = this.getTemplate();
			this.el = <HTMLElement> template.content.firstChild;
			return this.el;
		}

		// template, should be overwritten ...
		public getTemplate () : string {return `should be overwritten...`};

		public remove(){
			this.el.parentNode.removeChild(this.el);
		}
	}
}