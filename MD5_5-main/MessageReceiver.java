package com.example.broadcastmessages;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.widget.Toast;

public class MessageReceiver extends BroadcastReceiver {

    @Override
    public void onReceive(Context context, Intent intent) {
        Toast.makeText(context, "Найдено сообщение: " +
                        intent.getStringExtra("com.example.broadcastmessages.broadcast.Message"),
                Toast.LENGTH_LONG).show();
    }

}