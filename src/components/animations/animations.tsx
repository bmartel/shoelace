import { Component, Prop, Watch } from '@stencil/core';
import { registerAnimations, AnimationRegistry } from './animations-registry';

/**
 * @since 2.0
 * @status stable
 */

@Component({
  tag: 'sl-animations',
  styleUrl: 'animations.scss',
  shadow: true
})
export class Animations {
  /** A set of animation keyframe object arrays bundled as an animation to be used by sl-animation */
  @Prop() registry: AnimationRegistry;

  @Watch('registry')
  handleUpdate() {
    // Subsequent registrations with the same name will invalidate existing ones
    this.register();
  }

  connectedCallback() {
    if (this.registry) {
      this.register();
    }
  }

  disconnectedCallback() {
    registerAnimations({});
  }

  register() {
    const { registry } = this;
    registerAnimations(registry);
  }

  render() {
    return null;
  }
}
