/* eslint-disable @typescript-eslint/no-unused-vars */
namespace Providers.RangeSlider {
	export class NoUiSliderConfig extends OSUIFramework.Patterns.RangeSlider.AbstractRangeSliderConfig {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		public getProviderConfig(): any {
			// eslint-disable-next-line prefer-const
			let providerOptions = {
				direction: OutSystems.OSUI.Utils.GetIsRTL()
					? OSUIFramework.GlobalEnum.Direction.RTL
					: OSUIFramework.GlobalEnum.Direction.LTR,
				start: this.IsInterval ? [this.InitialValueStart, this.InitialValueEnd] : [this.InitialValueStart],
				step: this.Step,
				connect: this.IsInterval ? true : Enum.NoUiSpliderConnectOptions.Lower,
				orientation: this.IsVertical
					? OSUIFramework.GlobalEnum.Orientation.Vertical
					: OSUIFramework.GlobalEnum.Orientation.Horizontal,
				range: {
					min: this.MinValue,
					max: this.MaxValue === this.MinValue ? 100 : this.MaxValue,
				},
			};

			//Cleanning undefined properties
			Object.keys(providerOptions).forEach(
				(key) => providerOptions[key] === undefined && delete providerOptions[key]
			);

			return providerOptions;
		}
	}
}