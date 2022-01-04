/*
Copyright 2022 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import { UnstableValue } from "../NamespacedValue";
import { M_MESSAGE_EVENT_CONTENT, MessageEvent } from "./MessageEvent";
import { IPartialEvent } from "../IPartialEvent";

// Emote events are just decorated message events

export const M_EMOTE = new UnstableValue("m.emote", "org.matrix.msc1767.emote");
export type M_EMOTE_EVENT = {[M_EMOTE.name]?: {}, [M_EMOTE.altName]?: {}};
export type M_EMOTE_EVENT_CONTENT = M_MESSAGE_EVENT_CONTENT & M_EMOTE_EVENT;

export class EmoteEvent extends MessageEvent {
    public constructor(wireFormat: IPartialEvent<M_EMOTE_EVENT_CONTENT>) {
        super(wireFormat);
    }

    public get isEmote(): boolean {
        return true; // override
    }
}